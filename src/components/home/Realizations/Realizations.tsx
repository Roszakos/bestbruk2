import Image from "next/image";

import SectionTitle from "../SectionTitle";
import RealziationsItem from "./RealizationsItem";

export default function Realizations() {
  return (
    <>
      <div className="mt-20 max-w-[1000px] m-auto px-4 sm:px-8">
        <SectionTitle text="Nasze realizacje" />
        <RealziationsItem
          title="Kleszczewo Park"
          description="10 000+ m2 kostki brukowej, 1000+ mb obrzeży"
        >
          <Image src="/bestbruk/images/kleszczewo.jpeg" alt="kleszczewo" fill />
        </RealziationsItem>
        <RealziationsItem
          title="Szkoła podstawowa w Swarzędzu"
          description="10 000+ m2 kostki brukowej, 1000+ mb obrzeży"
        >
          <Image src="/bestbruk/images/swarzedz.jpeg" alt="swarzedz" fill />
        </RealziationsItem>
        <RealziationsItem
          title="Kleszczewo Park"
          description="10 000+ m2 kostki brukowej, 1000+ mb obrzeży"
        >
          <Image src="/bestbruk/images/kleszczewo.jpeg" alt="kleszczewo" fill />
        </RealziationsItem>
      </div>
    </>
  );
}
