import * as React from "react";
import { AlertDialog } from "radix-ui";

import './index.jsx.css'

const AlertDialogDemo = () => (
  <AlertDialog.Root className="alert-dialog-root">
    <AlertDialog.Trigger asChild>
      {/* <button className={`${styles.Button} violet`}>Delete account</button> */}
      <button className="x-button Color(white,red-10) --hover-bgc-red-9 --hover ff-inter">
        Delete Account
      </button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay
        keyframes-overlayShow="@0-o-0 @100-o-1 "
        className="bgc-0000000000d7 pf inset-0 an-overlayShow adu-150ms atf--atf:cubic(0.16,1,0.3,1)"
      />
      <AlertDialog.Content
        keyframes-contentShow="@0-[o-0,tf-t--50p--48p__s-0.96] @100-[o-1,tf-t--50p--50p__s-1]"
        className="bgc-gray-100 pf br-6px x-shadow t-50p l-50p tf-t--50p--50p w-90vw xw-500px xh-85vh p-25px an-contentShow adu-150ms atf--atf:cubic(0.16,1,0.3,1) --fo-oln"
      >
        <AlertDialog.Title className="m-0 fs-17px fw5">
          Are you absolutely sure?
        </AlertDialog.Title>
        <AlertDialog.Description className="mb-20px c-gray-600 fs-15px lh-1d5">
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </AlertDialog.Description>
        <div className="df g-25px justify-content-flex-end">
          <AlertDialog.Cancel asChild>
            <button className="x-button --ho-bgc-mauve5 bgc-mauve4 c-mauve11 oc-mauve7">
              Cancel
            </button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="x-button --ho-bgc-red5 bgc-red4 c-red11 oc-red7">
              Yes, delete account
            </button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogDemo;
