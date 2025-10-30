import styled from "styled-components";

export const Container = styled.div`
  max-width: 1070px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

// import styled from "styled-components";
//
// export const Container = styled.div`
//   max-width: 1070px;
//   width: 100%;
//   min-height: 100%;
//   padding: 0 15px;
//   margin: 0 auto;
//   position: relative;
//
//   /* Показывает padding область */
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: rgba(255, 0, 0, 0.2); /* красный - padding */
//     border: 1px solid red;
//     pointer-events: none;
//   }
//
//   /* Показывает content область */
//   &::after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 15px;
//     right: 15px;
//     bottom: 0;
//     background-color: rgba(0, 255, 0, 0.2); /* зеленый - content */
//     border: 1px solid green;
//     pointer-events: none;
//   }
// `