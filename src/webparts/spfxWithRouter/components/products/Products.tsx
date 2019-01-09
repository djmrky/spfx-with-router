import * as React from "react";

export default class Products extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    return (
      <div>
        I am the PRODUCTS ROUTE
        <button type="button" onClick={this.showProduct10.bind(this)}>
          Show product 10
        </button>
      </div>
    );
  }

  showProduct10() {
    (this.props as any).history.push("/product/10");
  }
}
