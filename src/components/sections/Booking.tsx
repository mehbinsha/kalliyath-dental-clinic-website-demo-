"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CalendarDays, Toothbrush } from "lucide-react";

const concerns = [
  "Check up / Cleaning",
  "Tooth pain / Emergency",
  "Teeth whitening",
  "Hygiene & cleaning",
  "Missing tooth",
  "Kids dental check",
];

type FieldName = "concern" | "date" | "time" | "name" | "phone";
type FieldErrors = Partial<Record<FieldName, string>>;

function getLocalDate() {
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  return now.toISOString().slice(0, 10);
}

export default function Booking() {
  const [concern, setConcern] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState("");
  function clearFieldError(field: FieldName) {
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FieldErrors = {};
    const currentDate = getLocalDate();
    if (!concern) nextErrors.concern = "Choose a concern to continue.";
    if (!date) nextErrors.date = "Choose a preferred date.";
    else if (date < currentDate) nextErrors.date = "Choose today or a future date.";
    if (!time) nextErrors.time = "Choose a preferred time.";
    if (!name.trim()) nextErrors.name = "Enter your full name.";
    if (!/^[6-9]\d{9}$/.test(phone)) {
      nextErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("");
      return;
    }

    setStatus(
      "Demo request ready. This form does not send a message or book an appointment.",
    );
  }

  return (
    <section
      id="appointment"
      aria-labelledby="booking-heading"
      className="bg-green-dark px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto grid max-w-[1320px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
        <div className="max-w-[480px]">
          <p className="mb-3 inline-flex rounded-md bg-[#f5df8d] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-green-dark sm:text-[10px]">
            Book Your Appointment
          </p>
          <h2
            id="booking-heading"
            className="text-[30px] font-extrabold leading-[1.08] tracking-[-0.04em] sm:text-[36px] lg:text-[40px]"
          >
            You&apos;re not committing to treatment, You&apos;re booking{" "}
            <span className="box-decoration-clone bg-[#f5df8d] px-1 text-green-dark">
              clarity.
            </span>
          </h2>
          <p className="mt-4 max-w-[390px] text-sm leading-relaxed text-white/85 sm:text-base">
            Choose your concern and we&apos;ll help you with the next steps.
          </p>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 sm:rounded-3xl sm:p-6"
        >
          <fieldset
            aria-describedby={errors.concern ? "booking-concern-error" : undefined}
            className="min-w-0"
          >
            <legend className="mb-3 text-[11px] font-semibold text-white sm:text-xs">
              Choose Your Concern <span aria-hidden="true">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
              {concerns.map((option) => (
                <label key={option} className="relative min-w-0 cursor-pointer">
                  <input
                    type="radio"
                    name="concern"
                    value={option}
                    checked={concern === option}
                    aria-describedby={errors.concern ? "booking-concern-error" : undefined}
                    onChange={() => {
                      setConcern(option);
                      clearFieldError("concern");
                    }}
                    className="peer sr-only"
                  />
                  <span className="flex min-h-[54px] items-center gap-2 rounded-xl border border-transparent bg-white px-2.5 py-2 text-[10px] font-semibold leading-tight text-green-dark transition-colors peer-checked:border-green peer-checked:bg-mint-strong peer-focus-visible:ring-2 peer-focus-visible:ring-[#f5df8d] sm:min-h-[58px] sm:px-3 sm:text-[11px]">
                    <Toothbrush aria-hidden="true" className="h-4 w-4 shrink-0" strokeWidth={1.8} />
                    <span>{option}</span>
                  </span>
                </label>
              ))}
            </div>
            {errors.concern && (
              <p id="booking-concern-error" role="alert" className="mt-2 text-xs text-[#ffe49a]">
                {errors.concern}
              </p>
            )}
          </fieldset>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="min-w-0">
              <label htmlFor="booking-date" className="mb-1.5 block text-[11px] font-semibold text-white sm:text-xs">
                Choose Date <span aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <CalendarDays aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-green-dark" />
                <input
                  id="booking-date"
                  name="date"
                  type="date"
                  value={date}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? "booking-date-error" : undefined}
                  onChange={(event) => {
                    setDate(event.target.value);
                    clearFieldError("date");
                  }}
                  className="min-h-11 w-full min-w-0 rounded-lg border border-transparent bg-white py-2 pl-10 pr-3 text-sm text-foreground outline-none focus:border-green focus:ring-2 focus:ring-mint-strong"
                />
              </div>
              {errors.date && <p id="booking-date-error" role="alert" className="mt-1 text-xs text-[#ffe49a]">{errors.date}</p>}
            </div>

            <div className="min-w-0">
              <label htmlFor="booking-time" className="mb-1.5 block text-[11px] font-semibold text-white sm:text-xs">
                Preferred Time <span aria-hidden="true">*</span>
              </label>
              <input
                id="booking-time"
                name="time"
                type="time"
                value={time}
                aria-invalid={Boolean(errors.time)}
                aria-describedby={errors.time ? "booking-time-error" : undefined}
                onChange={(event) => {
                  setTime(event.target.value);
                  clearFieldError("time");
                }}
                className="min-h-11 w-full min-w-0 rounded-lg border border-transparent bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-green focus:ring-2 focus:ring-mint-strong"
              />
              {errors.time && <p id="booking-time-error" role="alert" className="mt-1 text-xs text-[#ffe49a]">{errors.time}</p>}
            </div>

            <div className="min-w-0">
              <label htmlFor="booking-name" className="mb-1.5 block text-[11px] font-semibold text-white sm:text-xs">
                Full Name <span aria-hidden="true">*</span>
              </label>
              <input
                id="booking-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your name"
                value={name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "booking-name-error" : undefined}
                onChange={(event) => {
                  setName(event.target.value);
                  clearFieldError("name");
                }}
                className="min-h-11 w-full min-w-0 rounded-lg border border-transparent bg-white px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted/80 focus:border-green focus:ring-2 focus:ring-mint-strong"
              />
              {errors.name && <p id="booking-name-error" role="alert" className="mt-1 text-xs text-[#ffe49a]">{errors.name}</p>}
            </div>

            <div className="min-w-0">
              <label htmlFor="booking-phone" className="mb-1.5 block text-[11px] font-semibold text-white sm:text-xs">
                Phone Number <span aria-hidden="true">*</span>
              </label>
              <div className="flex min-h-11 min-w-0 overflow-hidden rounded-lg border border-transparent bg-white focus-within:border-green focus-within:ring-2 focus-within:ring-mint-strong">
                <span aria-label="India country code, plus 91" className="flex shrink-0 items-center border-r border-border px-3 text-sm font-medium text-green-dark">
                  +91
                </span>
                <input
                  id="booking-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  placeholder="10-digit mobile number"
                  value={phone}
                  aria-label="Phone number, 10-digit Indian mobile number"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "booking-phone-error" : undefined}
                  onChange={(event) => {
                    setPhone(event.target.value.replace(/\D/g, "").slice(0, 10));
                    clearFieldError("phone");
                  }}
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted/80"
                />
              </div>
              {errors.phone && <p id="booking-phone-error" role="alert" className="mt-1 text-xs text-[#ffe49a]">{errors.phone}</p>}
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-[360px] text-[10px] leading-relaxed text-white/65 sm:text-[11px]">
              Frontend demo only. Your details are not sent or stored.
            </p>
            <button
              type="submit"
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#f5df8d] px-6 text-sm font-bold text-green-dark transition-colors hover:bg-[#f8e9b5] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5df8d] sm:w-auto sm:min-w-[155px]"
            >
              Send Request
              <ArrowRight aria-hidden="true" size={16} />
            </button>
          </div>
          {status && (
            <p role="status" aria-live="polite" className="mt-4 rounded-lg bg-mint px-4 py-3 text-xs font-medium leading-relaxed text-green-dark sm:text-sm">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
