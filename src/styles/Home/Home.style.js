import styled from "styled-components";
import theme from "../../theme";

export const MainContainer = styled.div`
  @media screen and (max-width: 1194px) {
    padding-top: 170px;
  }
`;

export const BodyContainer = styled.div`
  padding: 20px;
  display: flex;
  max-width: 100%;
  margin: 20px auto 0;
  padding-bottom: 120px;
  @media screen and (max-width: 1194px) {
    flex-direction: column-reverse;
    margin-top: 0;
    padding-bottom: 80px;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  max-width: 280px;
  min-width: 220px;
  margin-right: 20px;
  @media screen and (max-width: 1194px) {
    max-width: 100vw;
    margin: 20px 0 0;
  }
`;

export const VerificationStatus = styled.div`
  margin-bottom: 15px;
  @media screen and (max-width: 1194px) {
    position: absolute;
    top: 90px;
    width: calc(100% - 40px);
    margin: 0;
  }
  .VerificationBanner {
    background-color: rgba(42, 178, 123, 0.1);
    padding: 10px;
    box-sizing: border-box;
    border-left: 3px solid #2ab27b;
    .VerificationNested {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .shield_icon {
        color: #2ab27b;
        height: 26px;
        width: 23px;
      }
      .verified_text {
        margin-right: auto;
        margin-left: auto;
        color: ${theme.color.default};
        font-weight: 500;
      }
    }
    .valid_span_text {
      font-size: 12px;
      margin-top: 10px;
      text-align: center;
    }
  }
`;

export const IssuedTextContainer = styled.div`
  flex-direction: column;
  padding-bottom: 0;
  display: flex;
  margin: 0;
  position: relative;
  padding-bottom: 60px;
  font-size: 13px;
  text-align: center;

  .issued_group {
    box-sizing: border-box;
    padding-right: 15px;
    margin-top: 15px;
    display: block;
    unicode-bidi: isolate;
    .title {
      margin-bottom: 5px;
      text-transform: uppercase;
      font-weight: 600;
    }
    .span_text {
      margin: 0;
      word-break: break-all;
      display: block;
      unicode-bidi: isolate;
    }
  }
`;

export const LogoBox = styled.div`
  color: currentColor;
  text-decoration: none;
  margin-top: 30px;
  padding-top: 30px;
  width: 100%;
  border-top: 1px solid #f1f2f3;
  .sm__logo {
    width: 100px;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;

export const ResultContainer = styled.div`
  padding: 0;
`;

export const FullScreenCertificateContainer = styled.div`
  margin: 0 auto;
  background-color: #fff;
  color: #49555f;
  font-family: serif;
  text-align: center;
  font-size: 12px;
  word-wrap: break-word;
  box-sizing: border-box;
  line-height: initial;
  min-height: inherit;
  min-width: 1140px;
  @media screen and (max-width: 1194px) {
    min-width: auto !important;
    width: 100%;
  }
  .fullscreen-certificate {
    width: 80vw;
    height: auto;
    @media screen and (max-width: 1194px) {
      width: 90vw;
      height: auto;
    }
  }
`;

export const DetailsContainer = styled.img`
  display: block;
  margin-top: 20px;
  width: 80vw;
  height: auto;
  box-sizing: border-box;
  margin-bottom: 5%;
  @media screen and (max-width: 1194px) {
    width: 90vw;
    height: auto;
  }
`;

export const DetailButtons = styled.div`
  width: 95%;
  position: fixed;
  bottom: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;

export const DetailBtn = styled.button`
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
  box-shadow: rgba(10, 22, 50, 0.24) 0px 2px 8px -1px;
  border-radius: 8px;
  overflow: hidden;
  text-decoration: none;
  padding: 4px 0px;
  background: rgb(215, 90, 0);
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;
  width: 123px;
  @media screen and (max-width: 1194px) {
    font-size: 12px;
    width: 93px;
  }
`;
