import { Navbar } from "@/components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">À propos de nous</h1>
          
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1590735213920-68192a487bc2"
              alt="Artisan tissant du Bogolan"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p>
              Fondée en 2017, YA KURIA est une entreprise sénégalaise dédiée à la préservation et à la valorisation de l'artisanat traditionnel du Bogolan et Wax, un savoir-faire ancestral profondément enraciné dans la culture et l'histoire du pays. Notre société a pour mission de proposer des produits de couture authentiques, alliant l'art du Bogolan aux tendances modernes de la mode.
            </p>

            <p>
              L'idée de créer YA KURIA est née de la passion de ses fondateurs pour les tissus traditionnels du Sénégal, notamment le Bogolan, un textile qui raconte une histoire à travers ses couleurs, ses motifs et ses techniques de fabrication. Ce tissu, fabriqué à la main à partir de fibres naturelles et teinté avec des colorants issus de la terre, incarne l'âme du Sénégal.
            </p>

            <p>
              Depuis sa création, YA KURIA s'efforce de maintenir l'authenticité du processus de fabrication tout en apportant une touche contemporaine. Nous collaborons avec des artisans locaux, principalement issus de la capitale de Dakar en collaboration avec le pays du Mali, pour garantir que chaque pièce soit confectionnée de manière éthique et durable. Les artisans, qui maîtrisent les secrets du bogolan transmis de génération en génération, sont au cœur de notre processus de production.
            </p>

            <p>
              Au fil des années, nous avons diversifié notre offre, créant des vêtements, des accessoires et des articles de décoration qui allient élégance, modernité et tradition. Chaque produit de YA KURIA est une œuvre unique, fabriquée à la main, qui raconte l'histoire du bogolan et celle de ses créateurs.
            </p>

            <p>
              Notre engagement envers le développement durable et la promotion de l'artisanat local nous a permis de gagner la confiance de nos clients, aussi bien au Sénégal qu'à l'international. En effet, nos créations ont su séduire une clientèle sensible à la richesse des savoir-faire traditionnels et à l'authenticité de nos produits.
            </p>

            <p>
              YA KURIA est bien plus qu'une simple marque : c'est une ambassadrice de la culture sénégalaise et une actrice du développement économique local. Nous continuons de grandir et d'innover, tout en restant fidèles à nos valeurs de respect des traditions, de qualité artisanale et de responsabilité sociale.
            </p>

            <p>
              Aujourd'hui, nous nous réjouissons de pouvoir offrir à nos clients des produits en bogolan fabriqués de manière responsable, tout en soutenant les artisans et en préservant un patrimoine culturel précieux pour les générations futures.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;