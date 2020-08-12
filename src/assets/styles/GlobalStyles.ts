import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%;
    }

    textarea:focus,
    input:focus,
    button:focus {
        outline: none;
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-moz-keyframes fadein {
        /* Firefox */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-webkit-keyframes fadein {
        /* Safari and Chrome */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @-o-keyframes fadein {
        /* Opera */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
