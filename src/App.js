import image from "images/image.jpg";
import csv from "csv/test.csv";

export default class App {
  constructor(text) {
    this.text = text || "Nothing to display";
  }

  render() {
    const trArr = csv.map(row => {
      return `
      <tr>
        <td>${row.Name}</td>
        <td>${row.Age}</td>
      </tr>
      `
    });
    const csvElement = `
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      ${trArr.join("")}
    </table>
    `;
    return `
        <div>
            <h2>Homework 22.10.2020</h2>
            <div>${this.text}</div>
            <br/>
            <div class="container">
              <div class="table-container">CSV DATA: ${csvElement}</div>
              <img src=${image} />
            </div>
        </div>
        `;
  }
}
