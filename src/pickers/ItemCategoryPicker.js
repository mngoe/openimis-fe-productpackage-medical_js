import React, { Component } from "react";
import { ConstantBasedPicker } from "@openimis/fe-core";

import { ITEM_CATEGORIES } from "../constants";

class ItemCategoryPicker extends Component {
  render() {
    return <ConstantBasedPicker module="admin" label="medical.itemCategory" constants={ITEM_CATEGORIES} {...this.props} />;
  }
}

export default ItemCategoryPicker;
