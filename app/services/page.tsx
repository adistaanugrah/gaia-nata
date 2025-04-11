export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-serif mb-6">Our Services</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <li>
          <h2 className="font-semibold text-lg mb-2">Wedding Decorations</h2>
          <p>Bespoke wedding decor that brings your vision to life.</p>
        </li>
        <li>
          <h2 className="font-semibold text-lg mb-2">Event Styling</h2>
          <p>Elegant floral arrangements and event curation for special occasions.</p>
        </li>
        <li>
          <h2 className="font-semibold text-lg mb-2">Venue Transformation</h2>
          <p>Transform any space with personalized floral styling.</p>
        </li>
      </ul>
    </main>
  );
}