"use client";

import { PolarCheckoutButton } from "@/registry/new-york/polar-checkout-button/PolarCheckoutButton";

export function Preview() {
  return (
    <div className="flex flex-col gap-8 bg-black p-8 rounded-xl">
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white">Hero Variant</h3>
        <PolarCheckoutButton
          checkoutUrl="#"
          price="$19"
          productName="DMX"
          variant="hero"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white">Header Variant</h3>
        <div className="flex">
          <PolarCheckoutButton
            checkoutUrl="#"
            price="$29"
            variant="header"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white">Pricing Variant</h3>
        <div className="max-w-xs">
          <PolarCheckoutButton
            checkoutUrl="#"
            price="$14"
            productName="Passlock"
            variant="pricing"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-white">Custom Text</h3>
        <PolarCheckoutButton
          checkoutUrl="#"
          price="$9"
          text="Start Free Trial"
          variant="hero"
          hideIcon
        />
      </div>
    </div>
  );
}
