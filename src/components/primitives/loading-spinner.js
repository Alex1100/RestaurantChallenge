import styled from "styled-components";
import {
    color,
    space,
    width,
    height,
    fontSize,
} from "styled-system";

export const LoadingSpinnerContainer = styled.div`
    ${space}
    ${width}
    ${height}
    ${color}
    border: groove transparent 2px;
    border-radius: 2px;
`;
LoadingSpinnerContainer.displayName = "LoadingSpinnerContainer";

export const LightLoadingSpinner = styled.div`
    ${space}
    ${width}
    ${height}
    ${fontSize}
    text-indent: -9999em;
    border-radius: 50%;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;

@keyframes load8 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;

LightLoadingSpinner.displayName = "LightLoadingSpinner";
LightLoadingSpinner.defaultProps = {
    m: "60px auto",
    width: "18em",
    height: "18em",
    fontSize: "4px",
};


export const DarkLoadingSpinner = styled.div`
    ${space}
    ${width}
    ${height}
    ${fontSize}
    text-indent: -9999em;
    border-radius: 50%;
    border-top: 1.1em solid #4f3529;
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid #4f3529;
    border-left: 1.1em solid #4f3529;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;

@keyframes load8 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
`;

DarkLoadingSpinner.displayName = "DarkLoadingSpinner";
DarkLoadingSpinner.defaultProps = {
    m: "0 auto",
    width: "18em",
    height: "18em",
    fontSize: "2px",
};
