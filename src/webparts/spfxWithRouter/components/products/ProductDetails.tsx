import * as React from "react";

export default class ProductDetails extends React.Component<{}, {}> {
  public render(): React.ReactElement<{}> {
    debugger;
    const productId = (this.props as any).match.params.id;
    const queryString = (this.props as any).location.query;
    return (
      <div>
        I am the PRODUCT ID={productId}
        <button type="button" onClick={this.backToProducts.bind(this)}>
          Back to products
        </button>
      </div>
    );
  }

  backToProducts() {
    (this.props as any).history.push("/products");
  }
}
