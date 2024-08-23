/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { SignedIn } from "@clerk/nextjs";
import chatImg from "../public/chat_image.png";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const loged = SignedIn;
  const features = [
    {
      name: "Stockez vos documents pdf",
      description:
        "Gardez tous vos documents PDF stockés en toute sécurité et facilement accessibles à tout moment, où que vous soyez.",
      icon: GlobeIcon,
    },
    {
      name: "Des réponses ultra-rapides",
      description:
        "Les réponses à vos questions sont rapides comme l'éclair, ce qui vous permet d'obtenir instantanément les informations dont vous avez besoin.",
      icon: ZapIcon,
    },
    {
      name: "Mémorisation du chat",
      description:
        "Notre chatbot intelligent se souvient des interactions précédentes, offrant ainsi une expérience transparente et personnalisée. ",
      icon: BrainCogIcon,
    },
    {
      name: "Visualiseur interactif de PDF",
      description:
        "Consultez vos PDF comme jamais auparavant grâce à notre visionneuse intuitive et interactive.",
      icon: EyeIcon,
    },
    {
      name: "Sauvegarde dans le nuage",
      description:
        "Soyez rassuré en sachant que vos documents sont sauvegardés en toute sécurité sur le cloud, protégés contre la perte ou les dommages.",
      icon: ServerCogIcon,
    },
    {
      name: "Adapté à tous les appareils",
      description:
        "Accédez à vos PDF et discutez avec en toute transparence sur n'importe quel appareil, qu'il s'agisse d'un ordinateur de bureau, d'une tablette ou d'un smartphone.",
      icon: MonitorSmartphoneIcon,
    },
  ];
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-blue-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl bg-gradient-to-br from-white to-indigo-50/50">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Votre Compagnon Interactif de Documents
            </h2>

            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transformez vos PDF en conversations interactives
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-500">
              Introduction{" "}
              <span className="font-bold text-blue-600">Discutez avec PDF</span>
              <br />
              <br />
              Téléchargez votre document et notre chatbot répondra à vos
              questions, résumera le contenu et répondra à toutes vos questions.
              Idéal pour tous,{" "}
              <span className="font-bold text-blue-600">
                Discutez avec PDF
              </span>{" "}
              transforme les documents statiques en{" "}
              <span className="font-bold">conversations dynamiques </span>
              améliorez votre productivité en multipliant par 10 le nombre de
              plis sans effort
            </p>
          </div>
          <div className="flex items-center justify-center space-x-8">
            <Button
              asChild
              className="mt-10 hover:bg-gray-200 hover:text-black"
            >
              <Link href="/dashboard">Commencer !</Link>
            </Button>
            <Button
              asChild
              className="mt-10 bg-blue-500 hover:bg-gray-200 hover:text-black"
            >
              <Link href="/dashboard">S'inscrire</Link>
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="app screenshot"
              src={chatImg}
              width={2432}
              height={1642}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10 border-x-2 border-blue-600"
            />
            <div
              aria-hidden="true"
              className="relative"
            >
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-6">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="absolute left-1 top-1 w-5 h-5 text-blue-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
