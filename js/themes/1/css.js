
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
  flex-wrap: nowrap;
}

.col {
  background: white;
}

label{
  padding: 5px 0;
  display: flex;
  flex-direction: column;
}

input {
  border: 1px solid darkgray;
  background: transparent;
  padding: 3px;
  box-shadow: none;
  color: black;
  width: calc(100% - 6px);
  border-radius: 10px;
}

input:focus {
  border-color: dodgerblue;
}

input {
  padding: 12px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  outline: none;
}

input::placeholder {
  color: #aaa;
}

input:focus {
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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


dataObj.rowCss = ``;
dataObj.cellCss = '';