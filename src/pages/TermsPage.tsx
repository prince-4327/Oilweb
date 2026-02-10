export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mb-8"></div>

      <div className="prose prose-sm max-w-none text-gray-700 space-y-6">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Agreement to Terms</h2>
          <p>
            By accessing and using the SaloniOil website, you accept and agree to be bound by the terms and provision of this agreement. These terms and conditions apply to all users of the website, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on SaloniOil's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on the website</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Disclaimer</h2>
          <p>
            The materials on SaloniOil's website are provided on an 'as is' basis. SaloniOil makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Limitations</h2>
          <p>
            In no event shall SaloniOil or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SaloniOil's website, even if SaloniOil or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Accuracy of Materials</h2>
          <p>
            The materials appearing on SaloniOil's website could include technical, typographical, or photographic errors. SaloniOil does not warrant that any of the materials on its website are accurate, complete, or current. SaloniOil may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Links</h2>
          <p>
            SaloniOil has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SaloniOil of the site. Use of any such linked website is at the user's own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">7. Modifications</h2>
          <p>
            SaloniOil may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>
      </div>

      <div className="mt-12 p-6 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-gray-700 text-sm">
          Last updated: {new Date().toLocaleDateString()}. If you have any questions about these Terms and Conditions, please contact us at legal@salonimail.com
        </p>
      </div>
    </div>
  );
}
