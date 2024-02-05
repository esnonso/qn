import React from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

const Loader = () => (
  <LoaderContainer>
    <Spinner />
    <LoadingText>Loading content...</LoadingText>
  </LoaderContainer>
);

export default Loader;
