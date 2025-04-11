export default function PortfolioPage() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-serif mb-6">Portfolio</h1>
      <p className="mb-4">Explore our featured works and floral installations:</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 h-48 flex items-center justify-center">Photo 1</div>
        <div className="bg-gray-100 h-48 flex items-center justify-center">Photo 2</div>
        <div className="bg-gray-100 h-48 flex items-center justify-center">Photo 3</div>
      </div>
    </main>
  );
}