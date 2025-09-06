import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmailSubscriberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = insertEmailSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getEmailSubscriberByEmail(email);
      if (existingSubscriber) {
        return res.status(409).json({ 
          error: "Email already subscribed",
          message: "This email is already on our waitlist!" 
        });
      }
      
      // Create new subscriber
      const subscriber = await storage.createEmailSubscriber({ email });
      
      res.status(201).json({ 
        success: true,
        message: "Successfully subscribed to the waitlist!",
        subscriber: { id: subscriber.id, email: subscriber.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid email format",
          message: "Please enter a valid email address" 
        });
      }
      
      console.error("Subscription error:", error);
      res.status(500).json({ 
        error: "Internal server error",
        message: "Something went wrong. Please try again." 
      });
    }
  });

  // Get all subscribers (for admin use)
  app.get("/api/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getAllEmailSubscribers();
      res.json({ 
        count: subscribers.length,
        subscribers: subscribers.map(s => ({ 
          id: s.id, 
          email: s.email, 
          subscribedAt: s.subscribedAt 
        }))
      });
    } catch (error) {
      console.error("Get subscribers error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
