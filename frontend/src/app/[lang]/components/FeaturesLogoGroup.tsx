// interface Picture {
//   data: {
//     id: string;
//     attributes: {
//       url: string;
//       name: string;
//       alternativeText: string;
//     };
//   };
// }

interface Image {
  id: number;
  attributes: {
    alternativeText: string | null;
    caption: string | null;
    url: string;
  };
}

interface FeaturesProps {
  data: {
    heading: string;
  };
}

export default function FeaturesLogoGroup({ data }: FeaturesProps) {
  console.log('data', data)
  return (
    <section className="dark:bg-black dark:text-gray-100 m:py-12 lg:py-24">
      <div className="container mx-auto py-4 space-y-2 text-center">
        <h2 className="text-5xl font-bold">{data.heading}</h2>
      </div>
      <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
      </div>
    </section>
  );
}
