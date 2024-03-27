"use strict";(self.webpackChunkwc4=self.webpackChunkwc4||[]).push([[86],{9086:(t,e,n)=>{n.d(e,{SIWEController:()=>r});var i=n(7767);n(8951);var s=n(4707),a=n(9073);const o=(0,a.BX)({status:"uninitialized"}),r={state:o,subscribeKey:(t,e)=>(0,s.u$)(o,t,e),subscribe:t=>(0,a.B1)(o,(()=>t(o))),_getClient(){if(!o._client)throw new Error("SIWEController client not set");return o._client},async getNonce(){const t=this._getClient(),e=await t.getNonce();return this.setNonce(e),e},async getSession(){const t=this._getClient(),e=await t.getSession();return e&&(this.setSession(e),this.setStatus("success")),e},createMessage(t){const e=this._getClient().createMessage(t);return this.setMessage(e),e},async verifyMessage(t){const e=this._getClient();return await e.verifyMessage(t)},async signIn(){const t=this._getClient();return await t.signIn()},async signOut(){const t=this._getClient();await t.signOut(),this.setStatus("ready"),t.onSignOut?.()},onSignIn(t){const e=this._getClient();e.onSignIn?.(t)},onSignOut(){const t=this._getClient();t.onSignOut?.()},setSIWEClient(t){o._client=(0,a.KR)(t),o.status="ready",i.OptionsController.setIsSiweEnabled(t.options.enabled)},setNonce(t){o.nonce=t},setStatus(t){o.status=t},setMessage(t){o.message=t},setSession(t){o.session=t}};var l=n(1407),c=(n(842),n(6752),n(5228));const u=c.AH`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let g=class extends c.WF{constructor(){super(...arguments),this.dappImageUrl=i.OptionsController.state.metadata?.icons,this.walletImageUrl=i.iT.getConnectedWalletImageUrl()}firstUpdated(){const t=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");t?.[0]&&this.createAnimation(t[0],"translate(18px)"),t?.[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){return c.qy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};g.styles=u,g=function(t,e,n,i){var s,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(a<3?s(o):a>3?s(e,n,o):s(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o}([(0,l.customElement)("w3m-connecting-siwe")],g),n(5694);var d=n(4290),w=function(t,e,n,i){var s,a=arguments.length,o=a<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(o=(a<3?s(o):a>3?s(e,n,o):s(e,n))||o);return a>3&&o&&Object.defineProperty(e,n,o),o};let h=class extends c.WF{constructor(){super(...arguments),this.dappName=i.OptionsController.state.metadata?.name,this.isSigning=!1}render(){return c.qy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="shade"
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0,i.En.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"});try{r.setStatus("loading");const t=await r.signIn();return r.setStatus("success"),i.En.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),t}catch(t){return i.SnackController.showError("Signature declined"),r.setStatus("error"),i.En.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"})}finally{this.isSigning=!1}}async onCancel(){const{isConnected:t}=i.AccountController.state;t?(await i.ConnectionController.disconnect(),i.W3.close()):i.RouterController.push("Connect"),i.En.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"})}};w([(0,d.w)()],h.prototype,"isSigning",void 0),h=w([(0,l.customElement)("w3m-connecting-siwe-view")],h)}}]);