import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { NavBar } from "@/components/navbar";

export default function TermsOfService() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <NavBar />
      <div className="pt-16 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <FileText className="h-8 w-8 text-purple-600" />
              <CardTitle className="text-3xl font-bold text-gray-900">
                Terms of Service
              </CardTitle>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> December 2024
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Agreement to Terms</h2>
              <p>
                By accessing or using PartyGames ("the App", "we", "us", or "our"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not access or use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Age Restrictions</h2>
              <p>
                PartyGames is intended for users aged <strong>13 and older</strong>. By using the App, you represent and warrant that you are at least 13 years old. If you are under 18, you represent that you have your parent's or guardian's permission to use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Account Creation</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Account Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must not share your account credentials with others</li>
                <li>You must not create multiple accounts to circumvent restrictions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">User Conduct</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Prohibited Activities</h3>
              <p>You agree NOT to:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                <li><strong>Harassment:</strong> Harass, abuse, or harm other users</li>
                <li><strong>Inappropriate Content:</strong> Use offensive, vulgar, or inappropriate usernames</li>
                <li><strong>Cheating:</strong> Use exploits, hacks, or unauthorized methods to gain advantages</li>
                <li><strong>Spam:</strong> Send unsolicited messages or create spam rooms</li>
                <li><strong>Impersonation:</strong> Impersonate other users or entities</li>
                <li><strong>Illegal Activities:</strong> Use the App for any illegal purpose</li>
                <li><strong>Reverse Engineering:</strong> Attempt to reverse engineer or decompile the App</li>
                <li><strong>Interference:</strong> Disrupt or interfere with the App's functionality or servers</li>
              </ol>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Username Guidelines</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Usernames must be appropriate and not offensive</li>
                <li>Usernames cannot impersonate other users or entities</li>
                <li>We reserve the right to change or remove inappropriate usernames</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Our Rights</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The App, including all content, features, and functionality, is owned by PartyGames</li>
                <li>All trademarks, logos, and brand names are our property</li>
                <li>You may not copy, modify, or distribute our content without permission</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Your Content</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You retain ownership of content you create (usernames, game participation)</li>
                <li>By using the App, you grant us a license to use your content for App functionality</li>
                <li>You represent that your content does not violate any third-party rights</li>
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-blue-900 text-sm">
                  <strong>Multiplayer Sharing:</strong> Your username and game actions are visible to other players in multiplayer games. By participating in multiplayer games, you consent to this sharing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Game Rules and Fair Play</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Fair Play</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All users must play fairly and honestly</li>
                <li>Cheating, exploiting bugs, or using unauthorized tools is prohibited</li>
                <li>We reserve the right to investigate and take action against unfair play</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Game Moderation</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We may monitor game sessions for compliance with these Terms</li>
                <li>We reserve the right to remove users from games for violations</li>
                <li>Decisions regarding game moderation are final</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Account Termination</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Termination by You</h3>
              <p>
                You may delete your account at any time through the App's Profile settings. Account deletion is permanent and cannot be undone.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Termination by Us</h3>
              <p>We may suspend or terminate your account if you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Violate these Terms of Service</li>
                <li>Engage in prohibited activities</li>
                <li>Use the App in a manner that harms other users or the App</li>
                <li>Fail to comply with our policies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Effects of Termination</h3>
              <p>Upon termination:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Your access to the App will be immediately revoked</li>
                <li>Your account data will be deleted in accordance with our Privacy Policy</li>
                <li>You will not be entitled to any refunds or compensation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Disclaimer</h3>
              <p className="uppercase text-sm">
                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Limitation</h3>
              <p className="uppercase text-sm mb-2">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, PARTYGAMES SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of data, profits, or business opportunities</li>
                <li>Service interruptions or technical issues</li>
                <li>Actions of other users</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Maximum Liability</h3>
              <p>
                Our total liability to you for any claims arising from your use of the App shall not exceed the amount you paid to use the App (if any) in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-3">
                <p className="text-yellow-900 text-sm">
                  <strong>Note:</strong> If PartyGames operates under a different legal jurisdiction, the applicable jurisdiction will be specified in an updated version of these Terms.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Dispute Resolution Process</h3>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Informal Resolution:</strong> Contact us at <a href="mailto:support@partygames.in" className="text-purple-600 hover:underline">support@partygames.in</a> to resolve disputes informally</li>
                <li><strong>Mediation:</strong> If informal resolution fails, disputes may be resolved through mediation</li>
                <li><strong>Arbitration:</strong> Disputes may be resolved through binding arbitration if mediation fails</li>
                <li><strong>Class Action Waiver:</strong> You agree not to participate in class action lawsuits</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify you of changes by:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Posting the updated Terms in the App</li>
                <li>Updating the "Last Updated" date</li>
                <li>Notifying you via in-app notification (for significant changes)</li>
              </ul>
              <p className="mt-3">
                Your continued use of the App after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and PartyGames regarding your use of the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p>If you have questions about these Terms, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="font-semibold">Email:</p>
                <p><a href="mailto:support@partygames.in" className="text-purple-600 hover:underline">support@partygames.in</a></p>
                <p className="font-semibold mt-3">Website:</p>
                <p><a href="https://partygames.in" className="text-purple-600 hover:underline">https://partygames.in</a></p>
              </div>
            </section>

            <section className="pt-4 border-t">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                <p className="uppercase text-sm font-semibold text-gray-900 mb-2">
                  BY USING THE APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> This Terms of Service should be hosted on your website at <code className="bg-blue-100 px-2 py-1 rounded">https://partygames.in/terms</code> for public access and store submission requirements.
                </p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
