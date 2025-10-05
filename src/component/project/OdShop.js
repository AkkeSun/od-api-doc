import React from 'react';
import 'swagger-ui-dist/swagger-ui.css';
import SwaggerUIBundle from "swagger-ui-dist/swagger-ui-bundle"
import SwaggerUIStandalonePreset from "swagger-ui-dist/swagger-ui-standalone-preset"

// -------- 이름을 변경합니다 ---------
function OdShop({props}) {
  React.useEffect(() => {
    const ui = SwaggerUIBundle({

      // -------- yaml 파일을 변경합니다 ---------
      urls: [
        {url:'https://api.odlab.kr/accounts/docs/account-api.yaml', name: 'account'},
        {url:'https://api.odlab.kr/products/docs/product-api.yaml', name: 'product'},
        {url:'https://api.odlab.kr/orders/docs/order-api.yaml', name: 'order'},
      ],

      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIStandalonePreset
      ],
      layout: "StandaloneLayout"
    })
    window.ui = ui
  })
  return (
      <div>
        <div id="swagger-ui"></div>
      </div>
  );
}

// -------- 이름을 변경합니다 ---------
export default OdShop;