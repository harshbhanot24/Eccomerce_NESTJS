export class BillingUtility {
  static itemDiscount(item, itemquantity, discount, quantity) {
    console.log('data coming to the ultity is');
    console.log('our item is', item);
    console.log('we bought', itemquantity);
    console.log('the discount giving', discount);
    console.log('the items qunatiy', quantity);
    const discountedItemCount = Math.floor(itemquantity / quantity) * quantity;
    console.log(
      'the items comign under dicounted price aare ',
      discountedItemCount,
    );
    const discountedPrice =
      (discountedItemCount * (item.price * (100 - discount))) / 100;
    const NoDiscountPrice = (itemquantity - discountedItemCount) * item.price;
    const finalPrice = discountedPrice + NoDiscountPrice;
    const Amount = itemquantity * item.price;
    console.log('the final amount no dis ' + Amount);
    console.log('the final price after discount ' + finalPrice);
    // const items =
    return { finalPrice, Amount };
  }
}
