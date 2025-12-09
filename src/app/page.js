import Image from "next/image";
import Hero from "./_components/hero/Hero";
import StayAhead from "./_components/stayAhead/StayAhead";
import Certificate from "./_components/certificates/Certificate";
import CareerSupport from "./_components/careerSupport/CareerSupport";
import Curriculum from "./_components/curriculum/Curriculum";
import DesignedFor from "./_components/designedFor/DesignedFor";
import Alumni from "./_components/alumni/Alumni";
import StudentCard from "./_components/becomeStudentCard/StudentCard";
import Footer from "./_components/footer/Footer";
import FloatCard from "./_components/floatCard/FloatCard";

export default function Home() {
  return (
    <>
<Hero/>
<div className="relative">

  <StayAhead/>
<Certificate/>
<CareerSupport/>  
<Curriculum/>
<DesignedFor/>
<Alumni/>
<StudentCard/>
<Footer/>
<FloatCard/>
</div>

</>
  );
}
