import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import {
  BodyContainer,
  DataContainer,
  DetailBtn,
  DetailButtons,
  DetailsContainer,
  FullScreenCertificateContainer,
  IssuedTextContainer,
  LogoBox,
  MainContainer,
  ResultContainer,
  VerificationStatus,
} from "../styles/Home/Home.style";
import { BiSolidCheckShield } from "react-icons/bi";

const Home = () => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const handleViewAll = () => {
    setIsDetailsVisible(true);
  };

  const handleClose = () => {
    setIsDetailsVisible(false);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1ShwEPGdPpoUCi285OPnN2Flp1JcbiVyl/view?usp=sharing";
    link.download = "certificate.pdf";
    link.click();
  };

  return (
    <MainContainer>
      <Navbar />
      <BodyContainer>
        <DataContainer>
          <VerificationStatus>
            <div className="VerificationBanner">
              <div className="VerificationNested">
                <BiSolidCheckShield className="shield_icon" />
                <p className="verified_text">Verified</p>
              </div>
              <p className="valid_span_text">
                This is a valid Ethereum certificate.
              </p>
            </div>
          </VerificationStatus>
          <IssuedTextContainer>
            <div className="issued_group">
              <p className="title">ISSUED DATE</p>
              <p className="span_text">Sep 11, 2024</p>
            </div>
            <div className="issued_group">
              <p className="title">ISSUER</p>
              <p className="span_text" style={{ fontSize: 11 }}>
                The Institute for International Business Communication
              </p>
            </div>
            <div className="issued_group">
              <p className="title">Issuer&apos;s public key</p>
              <p className="span_text">
                ecdsa-koblitz-pubkey:0x17bfe3d4c303bd03a37a3ceafd4e33bff11c1185
              </p>
            </div>
            <div className="issued_group">
              <p className="title">Transaction ID:</p>
              <p className="span_text">
                0xedbf9df901705526a4539a44300797e49726e2ed78b1ad9c2427035bb0d00bba
              </p>
            </div>
            <LogoBox>
              <img src="/images/cc2.png" alt="cc2" className="sm__logo" />
            </LogoBox>
          </IssuedTextContainer>
        </DataContainer>
        <ResultContainer>
          <FullScreenCertificateContainer>
            <img
              className="fullscreen-certificate"
              src="/images/Info_Transparent.png"
              alt="FullScreenCertificate"
            />
            {isDetailsVisible && (
              <DetailsContainer src="/images/2_Trans.png" alt="detail_result" />
            )}
          </FullScreenCertificateContainer>
        </ResultContainer>
      </BodyContainer>
      <DetailButtons>
        {!isDetailsVisible && (
          <DetailBtn onClick={handleViewAll}>VIEW ALL</DetailBtn>
        )}
        {isDetailsVisible && <DetailBtn onClick={handleClose}>CLOSE</DetailBtn>}
        <DetailBtn onClick={handleDownload}>DOWNLOAD</DetailBtn>
      </DetailButtons>
      <Footer />
    </MainContainer>
  );
};

export default Home;
