import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Download } from "lucide-react";
import { NavBar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { downloadAPK } from "@/lib/utils";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <NavBar />
      <div className="pt-16 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-8 w-8 text-purple-600" />
              <CardTitle className="text-3xl font-bold text-gray-900">
                Privacy Policy
              </CardTitle>
            </div>
            <p className="text-sm text-gray-600">
              <strong>Last Updated:</strong> November 2025           
            </p>
          </CardHeader>
          <CardContent className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Introduction</h2>
              <p>
                PartyGames ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App").
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>User IDs:</strong> Unique identifiers assigned to your account</li>
                <li><strong>Device IDs:</strong> Device identifiers for app functionality and account management</li>
                <li><strong>Email Address:</strong> Collected when you sign in with Google (or Apple Sign-In if enabled)</li>
                <li><strong>Username:</strong> Your chosen display name in the app (visible to other players in multiplayer games)</li>
                <li><strong>Profile Photo:</strong> Optional profile picture from your Google account</li>
                <li><strong>Authentication Method:</strong> Whether you signed in with Google or as an anonymous user</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Game Data</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Game Statistics:</strong> Games played, games won, win rates per game type</li>
                <li><strong>Player Records:</strong> Your participation in game rooms</li>
                <li><strong>Room Data:</strong> Room codes and game session information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Technical Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Device Information:</strong> Device type, operating system version, platform (iOS/Android)</li>
                <li><strong>Usage Data:</strong> App usage patterns, feature interactions</li>
                <li><strong>Connection Status:</strong> Network connectivity information and last seen timestamps for real-time gameplay and reconnection features</li>
                <li><strong>Local Storage:</strong> We use local device storage (AsyncStorage) to cache app state and improve performance. This data is stored only on your device and is not transmitted to our servers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Permissions</h2>
              <p>Our app requests the following permissions:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Internet:</strong> Required for online gameplay and data synchronization</li>
                <li><strong>Vibrate:</strong> Used for game feedback and notifications</li>
                <li><strong>System Alert Window</strong> (Android): Required for displaying game overlays and notifications</li>
              </ul>
              
              <p className="mt-4">
                <strong>Note:</strong> We do not request access to your camera, microphone, location, contacts, or other sensitive permissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Provide Game Services:</strong> Enable multiplayer gameplay, room creation, and game statistics tracking</li>
                <li><strong>User Authentication:</strong> Verify your identity and manage your account</li>
                <li><strong>Real-Time Synchronization:</strong> Synchronize game state and player actions across devices in real-time</li>
                <li><strong>Connection Management:</strong> Track connection status to enable reconnection features and maintain game state</li>
                <li><strong>Support:</strong> Respond to your inquiries and provide customer support</li>
                <li><strong>Legal Compliance:</strong> Comply with legal obligations and protect our rights</li>
              </ul>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <p className="text-blue-900 text-sm">
                  <strong>Note:</strong> We do not currently use analytics services. If we add analytics in the future, we will update this Privacy Policy and obtain your consent where required.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">How We Store Your Data</h2>
              <p>Your data is stored securely using:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Firebase:</strong> Google's cloud platform for data storage and authentication</li>
                <li><strong>Firestore:</strong> NoSQL database for user profiles and game statistics</li>
                <li><strong>Realtime Database:</strong> Real-time data synchronization for game sessions and player presence</li>
                <li><strong>Firebase Auth:</strong> Secure authentication (supports Google Sign-In and anonymous authentication)</li>
              </ul>
              <p className="mt-3">
                All data is encrypted in transit and at rest using industry-standard encryption methods.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
              <p>We use the following third-party services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Firebase (Google):</strong> Authentication, database, and security services</li>
                <li><strong>Google Sign-In:</strong> For user authentication</li>
              </ul>
              
              <p className="mt-3">
                <strong>Note:</strong> Apple Sign-In is currently not enabled. If enabled in the future, we will update this Privacy Policy.
              </p>

              <p className="mt-3">
                These services have their own privacy policies. We encourage you to review:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                <li><a href="https://policies.google.com/privacy" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                <li><a href="https://www.apple.com/privacy/" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Deep Linking and URL Handling</h2>
              <p>
                Our app uses deep linking (URL scheme: <code className="bg-gray-100 px-2 py-1 rounded">partygames://</code>) to enable:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Joining game rooms via shared links</li>
                <li>Navigating to specific game screens</li>
                <li>Sharing game invitations</li>
              </ul>
              <p className="mt-3">
                When you click a deep link, we may process the URL to route you to the appropriate screen. We do not collect or store the URLs you click.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Sharing with Other Users</h2>
              <p>
                In multiplayer games, certain information is visible to other players in the same game room:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Username:</strong> Your username is visible to all players in rooms you join</li>
                <li><strong>Game Participation:</strong> Your team assignment, role, and game actions are visible to other players</li>
                <li><strong>Connection Status:</strong> Your online/offline status may be visible to other players during active games</li>
                <li><strong>Game Statistics:</strong> Your win/loss statistics may be visible in game leaderboards (if implemented)</li>
              </ul>
              <p className="mt-3">
                This information sharing is necessary for the multiplayer game functionality. We do not share your email address, device information, or other personal details with other players.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Retention</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Active Accounts:</strong> Data is retained while your account is active</li>
                <li><strong>Deleted Accounts:</strong> All data is permanently deleted after account deletion</li>
                <li><strong>Game Statistics:</strong> Retained until account deletion</li>
                <li><strong>Room Data:</strong> Deleted after game sessions end</li>
              </ul>
            </section>

            {/* <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights (GDPR Compliance)</h2>
              <p>If you are located in the European Economic Area (EEA), you have the following rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (via Account Deletion in app)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section> */}

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">California Consumer Privacy Act (CCPA) Rights</h2>
              <p>If you are a California resident, you have the following additional rights:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li><strong>Right to Know:</strong> You have the right to know what personal information we collect, use, disclose, and sell (if applicable)</li>
                <li><strong>Right to Delete:</strong> You have the right to request deletion of your personal information (available via Account Deletion in app)</li>
                <li><strong>Right to Opt-Out:</strong> You have the right to opt-out of the sale of your personal information</li>
                <li><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights</li>
              </ul>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                <p className="font-semibold text-gray-900 mb-2">Do Not Sell My Personal Information:</p>
                <p className="text-gray-700 text-sm">
                  We do not sell your personal information to third parties. If this changes in the future, we will update this Privacy Policy and provide you with an opt-out mechanism.
                </p>
              </div>

              <p className="mt-3">
                To exercise your CCPA rights, please contact us at <a href="mailto:support@partygames.in" className="text-purple-600 hover:underline">support@partygames.in</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Encryption of data in transit</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security audits</li>
                <li>Access controls and monitoring</li>
              </ul>
              <p className="mt-3">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>Posting the new Privacy Policy in the app</li>
                <li>Updating the "Last Updated" date</li>
              </ul>
              <p className="mt-3">
                Your continued use of the App after changes constitutes acceptance of the updated Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Contact Information</h2>
              <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="font-semibold">Email:</p>
                <p><a href="mailto:support@partygames.in" className="text-purple-600 hover:underline">support@partygames.in</a></p>
                <p className="font-semibold mt-3">Website:</p>
                <p><a href="https://partygames.in" className="text-purple-600 hover:underline">https://partygames.in</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">Data Controller</h2>
              <p>The data controller for your personal information is:</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="font-semibold">PartyGames</p>
                <p>Contact: <a href="mailto:support@partygames.in" className="text-purple-600 hover:underline">support@partygames.in</a></p>
                <p>Website: <a href="https://partygames.in" className="text-purple-600 hover:underline">https://partygames.in</a></p>
              </div>
              
            </section>
          </CardContent>
        </Card>
      </div>
      </div>
    </div>
  );
}
