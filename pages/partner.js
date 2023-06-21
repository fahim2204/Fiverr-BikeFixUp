import PartnerHeroSection from "../components/PartnerHeroSection";
import PartnerPotential from "../components/PartnerPotential";
import PartnerUps from "../components/PartnerUps";
import React from "react";
import MainLayout from "../layouts/MainLayout";
const partner = () => {
    return (
        <>
            <MainLayout>
                <PartnerHeroSection />
                <PartnerPotential />
                <PartnerUps />
            </MainLayout>
        </>
    );
};


export default partner;