export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>

      <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
          <p>
            SaloniOil ("we" or "us" or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website and the choices you have associated with that data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our service:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> While using our service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include:
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Email address</li>
                <li>First name and last name</li>
                <li>Phone number</li>
                <li>Address, State, Province, ZIP/Postal code, City</li>
                <li>Cookies and Usage Data</li>
              </ul>
            </li>
            <li><strong>Usage Data:</strong> We may also collect information on how the service is accessed and used ("Usage Data"). This may include information such as your computer's IP address, browser type, pages visited, and the time and date of your visit.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Use of Data</h2>
          <p>SaloniOil uses the collected data for various purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our website</li>
            <li>To notify you about changes to our website</li>
            <li>To allow you to participate in interactive features of our website</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so that we can improve our website</li>
            <li>To monitor the usage of our website</li>
            <li>To detect, prevent and address technical issues</li>
            <li>To track and analyze trends, usage, and activities for marketing purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Security of Data</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the bottom of this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none pl-0 space-y-2">
            <li>By email: privacy@salonimail.com</li>
            <li>By phone: +91 1234 567 890</li>
            <li>By mail: 123 Oil Street, City, Country</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to object to processing of your data</li>
            <li>The right to withdraw consent at any time</li>
          </ul>
        </section>
      </div>

      <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-gray-700 text-sm">
          Last updated: {new Date().toLocaleDateString()}. Your privacy is important to us. If you have questions about our privacy practices, please contact privacy@salonimail.com
        </p>
      </div>
    </div>
  );
}
