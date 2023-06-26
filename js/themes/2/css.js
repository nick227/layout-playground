
dataObj.pageCss = `
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: white;
    font-family: Roboto;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 5px 0;
  }

  .row {
    display: flex;
    width: 100%;
    justify-content: center;
  }

  .col {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  }
  label{
    padding: 5px 0;
    display: flex;
    flex-direction: column;
  }
  input {
    border: 1px solid white;
    background: transparent;
    padding: 3px;
    box-shadow: none;
    color: white;
  }
  input:focus {
    border-color: dodgerblue;
  }
  .graphical-choice{
    display: flex;
  }
  .graphical-choice label{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 35px;
    height: 60px;
    height: 120px;
    cursor: pointer;
  }
  .graphical-choice img{
    height: 60px;
  }
  .checkbox-group, .radio-group {
    display: flex;
    flex-direction: row;
  }
  .checkbox-group label, .radio-group label{
    display: flex;
    margin-right: 35px;
  }
  .select-group {

  }
  .daterange-group{
    display: flex;
  }
`;

dataObj.cellPadding = 'padding: 80px;';
dataObj.rowFlexProps = `justify-content: stretch;`;