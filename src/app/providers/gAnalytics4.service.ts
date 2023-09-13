import { Injectable } from '@angular/core';
declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class GAnalytics4Service {

  constructor() { }
  virtualPageViewEvent(page_location?: string, pageTitle?: string, site_mnemonic?: string, version?: string, page_path: string = '') {
    window.dataLayer.push({
      'event': 'pageview',
      'page_location': page_location || window.location.href,
      'page_title': pageTitle,
      'page_path': page_path || location.pathname,
      'send_page_view': true,
      'site_mnemonic': site_mnemonic || 'COTTONON',
      'version': version || '23.2.2.1'
    });

    //   window.dataLayer.push({
    //     'event': 'pageview',
    //     'page_location': window.location.href,
    //     'page_title': pageTitle,
    //     'page_path': location.pathname,
    //     'send_page_view': true,
    //     'serviceCode': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //     'store': this.userData.location?.description,
    //     'scanCode_code': scanCode_code,
    //     'portalOwner': AppConfigService.settings.portalOwner,
    //     'version': EVA_VERSION
    //   });

    // }
    // itemViewEvent(selectedItem: IItem = {}, selecteditemColourRef: string = '', scanCode_code: string = '') {
    //   window.dataLayer.push({
    //     'event': 'view_item',
    //     'serviceCode': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //     'store': this.userData.location?.description,
    //     'scanCode_code': scanCode_code,
    //     'portalOwner': AppConfigService.settings.portalOwner,
    //     'version': EVA_VERSION,
    //     'currency': this.userData.location?.currency?.currency_code,
    //     'value': selectedItem.price,
    //     'items': [
    //       {
    //         'item_id': scanCode_code,
    //         'item_name': selectedItem.description,
    //         'affiliation': AppConfigService.settings.portalOwner,
    //         'currency': this.userData.location?.currency?.currency_code,
    //         'discount': parseFloat(selectedItem?.originalPrice?.toString() || '0') - parseFloat(selectedItem?.price?.toString() || '0'),
    //         'index': 0,
    //         'item_variant': selecteditemColourRef,
    //         'location_id': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //         'price': selectedItem?.originalPrice,
    //         'quantity': 1
    //       }
    //     ]
    //   });
    // }
    // thankyouEvent(uid?: string, amount?: number) {
    //   var obj: gAnalytics4ViewCart = {
    //     'event': 'purchase',
    //     'serviceCode': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //     'store': this.userData.location?.description,
    //     'portalOwner': AppConfigService.settings.portalOwner,
    //     'affiliation': AppConfigService.settings.portalOwner,
    //     'version': EVA_VERSION,
    //     'currency': this.userData.location?.currency?.currency_code,
    //     'value': amount,
    //     'tax': 0,
    //     'shipping': 0,
    //     'transaction_id': uid
    //   };
    //   let index = 0;
    //   let items: gAnalytics4Item[] = [];
    //   for (const line of this.basketService.basket) {
    //     items.push(
    //       {
    //         'item_id': line.sellcodeCode,
    //         'item_name': line.description,
    //         'affiliation': AppConfigService.settings.portalOwner,
    //         'currency': this.userData.location?.currency?.currency_code,
    //         'discount': (line.originalPrice || 0) - (line.priceEntered || 0),
    //         'index': index++,
    //         'item_variant': line.itemColourRef,
    //         'location_id': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //         'price': line.priceEntered,
    //         'quantity': line.qty
    //       }
    //     )
    //     obj['items'] = items;
    //   }
    //   window.dataLayer.push(obj);

    // }
    // errorEvent(pageTitle?: string, endpoint?: string, error?: any) {
    //   window.dataLayer.push({
    //     'event': 'exception',
    //     'description': JSON.stringify(error),
    //     'page_title': pageTitle,
    //     'errorname':endpoint,
    //     'status': error['status'],
    //     'statustext': error['statusText'],
    //     'url':error['url'],
    //     'innerexception': JSON.stringify(error['error']),
    //     'fatal': false   // set to true if the error is fatal
    //   });
    // }


    // addToCartEvent(selectedItem: IItem = {},  selecteditemColourRef: string = '', scanCode_code: string = '') {
    //   window.dataLayer.push({
    //     'event': 'add_to_cart',
    //     'serviceCode': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //     'store': this.userData.location?.description,
    //     'scanCode_code': scanCode_code,
    //     'portalOwner': AppConfigService.settings.portalOwner,
    //     'version': EVA_VERSION,
    //     'currency': this.userData.location?.currency?.currency_code,
    //     'value': selectedItem.price,
    //     'items': [
    //       {
    //         'item_id': scanCode_code,
    //         'item_name': selectedItem.description,
    //         'affiliation': AppConfigService.settings.portalOwner,
    //         'currency': this.userData.location?.currency?.currency_code,
    //         'discount': parseFloat(selectedItem?.originalPrice?.toString() || '0') - parseFloat(selectedItem?.price?.toString() || '0'),
    //         'index': 0,
    //         'item_variant': selecteditemColourRef,
    //         'location_id': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //         'price': selectedItem?.originalPrice,
    //         'quantity': 1
    //       }
    //     ]
    //   });
    // }
    // removedFromCartEvent(scanCode_code: string = '', newQty: number = 0) {
    //   var obj: gAnalytics4ViewCart = {
    //     'event': 'remove_from_cart',
    //     'serviceCode': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //     'store': this.userData.location?.description,
    //     'scanCode_code': scanCode_code,
    //     'portalOwner': AppConfigService.settings.portalOwner,
    //     'version': EVA_VERSION,
    //     'currency': this.userData.location?.currency?.currency_code,
    //     'value': 0
    //   };
    //   let items: gAnalytics4Item[] = [];
    //   for (const line of this.basketService.basket) {
    //     if (line.sellcodeCode = scanCode_code) {
    //       items.push(
    //         {
    //           'item_id': line.sellcodeCode,
    //           'item_name': line.description,
    //           'affiliation': AppConfigService.settings.portalOwner,
    //           'currency': this.userData.location?.currency?.currency_code,
    //           'discount': (line.originalPrice || 0) - (line.priceEntered || 0),
    //           'index': 0,
    //           'item_variant': line.itemColourRef,
    //           'location_id': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //           'price': line.priceEntered,
    //           'quantity': line.qty - newQty
    //         }

    //       )
    //       obj['items'] = items;
    //       break;
    //     }
    //   }
    //   obj.value = items[0].price;
    //   window.dataLayer.push(obj);
    // }

    // viewCartEvent(total: number) {
    //   var obj: gAnalytics4ViewCart = {
    //     'event': 'view_cart',
    //     'serviceCode': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //     'store': this.userData.location?.description,
    //     'portalOwner': AppConfigService.settings.portalOwner,
    //     'version': EVA_VERSION,
    //     'currency': this.userData.location?.currency?.currency_code,
    //     'value': total
    //   };
    //   let index = 0;
    //   let items: gAnalytics4Item[] = [];
    //   for (const line of this.basketService.basket) {
    //     items.push(
    //       {
    //         'item_id': line.sellcodeCode,
    //         'item_name': line.description,
    //         'affiliation': AppConfigService.settings.portalOwner,
    //         'currency': this.userData.location?.currency?.currency_code,
    //         'discount': (line.originalPrice || 0) - (line.priceEntered || 0),
    //         'index': index++,
    //         'item_variant': line.itemColourRef,
    //         'location_id': this.userData.getItemInMemory(CONST_STORAGE.SERVICECODE)?.servicecode || '',
    //         'price': line.priceEntered,
    //         'quantity': line.qty
    //       }
    //     )
    //     obj['items'] = items;
    //   }
    // window.dataLayer.push(obj);
  }


}
