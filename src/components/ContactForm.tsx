import { useRef, useEffect, useActionState } from "react";
import type { FormState } from "@/types/contact";
import { submitAction } from "@/actions/contact";
import { TURNSTILE_SITE_KEY } from "astro:env/client";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, formAction, isPending] = useActionState<FormState>(
    submitAction as any,
    { message: "" }
  );

  // Load Turnstile script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const s = document.querySelector(
        'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
      );
      if (s) document.head.removeChild(s);
    };
  }, []);

  useEffect(() => {
    if (formState?.success) {
      formRef.current?.reset();
    }
  }, [formState?.success]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-4"
    >
      <div>
        <label htmlFor="name" className="block mb-2 font-medium text-muted-foreground">
          Name
        </label>
        <input
          name="name"
          id="name"
          required
          disabled={isPending}
          className="w-full p-2.5 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-2 font-medium text-muted-foreground">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          disabled={isPending}
          className="w-full p-2.5 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-muted-foreground"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={5}
          required
          disabled={isPending}
          className="w-full p-2.5 border border-input rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-primary disabled:opacity-50"
        />
      </div>

      {/* Turnstile */}
      <div
        className="cf-turnstile w-full"
        data-sitekey={TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
        data-size="flexible"
      />

      {/* Error */}
      {formState?.error && (
        <div className="p-3 bg-red-500/10 text-red-500 rounded-md">
          {formState.error}
        </div>
      )}

      {/* Success */}
      {formState?.success && (
        <div className="p-3 bg-green-500/10 text-green-500 rounded-md">
          {formState.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className={`p-3 px-6 bg-primary text-primary-foreground rounded-md text-base font-semibold 
          hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isPending ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
