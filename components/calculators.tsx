"use client";

import { useMemo, useState } from "react";

import { formatCurrency } from "@/lib/utils";

import { Card } from "./ui";

export function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [years, setYears] = useState(15);
  const [annualReturn, setAnnualReturn] = useState(12);

  const futureValue = useMemo(() => {
    const monthlyRate = annualReturn / 12 / 100;
    const months = years * 12;
    return monthlyInvestment * (((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate);
  }, [annualReturn, monthlyInvestment, years]);

  return (
    <Card className="space-y-6">
      <h3 className="text-2xl font-semibold text-white">SIP Calculator</h3>
      <SliderField label="Monthly Investment" value={monthlyInvestment} min={1000} max={200000} step={1000} onChange={setMonthlyInvestment} prefix="₹" />
      <SliderField label="Investment Period" value={years} min={1} max={35} step={1} onChange={setYears} suffix=" years" />
      <SliderField label="Expected Annual Return" value={annualReturn} min={4} max={18} step={1} onChange={setAnnualReturn} suffix="%" />
      <div className="rounded-[1.5rem] border border-[var(--border)] bg-black/30 p-5">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">Projected Value</p>
        <p className="mt-3 text-3xl font-semibold text-white">{formatCurrency(futureValue)}</p>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          Illustrative only. Returns are not guaranteed and actual outcomes may vary.
        </p>
      </div>
    </Card>
  );
}

export function GoalPlannerCalculator() {
  const [goalAmount, setGoalAmount] = useState(5000000);
  const [yearsToGoal, setYearsToGoal] = useState(12);
  const [annualReturn, setAnnualReturn] = useState(11);

  const monthlySip = useMemo(() => {
    const monthlyRate = annualReturn / 12 / 100;
    const months = yearsToGoal * 12;
    return goalAmount / ((((1 + monthlyRate) ** months - 1) / monthlyRate) * (1 + monthlyRate));
  }, [annualReturn, goalAmount, yearsToGoal]);

  return (
    <Card className="space-y-6">
      <h3 className="text-2xl font-semibold text-white">Goal Planning Calculator</h3>
      <SliderField label="Goal Amount" value={goalAmount} min={100000} max={30000000} step={100000} onChange={setGoalAmount} prefix="₹" />
      <SliderField label="Years to Goal" value={yearsToGoal} min={1} max={30} step={1} onChange={setYearsToGoal} suffix=" years" />
      <SliderField label="Expected Annual Return" value={annualReturn} min={4} max={18} step={1} onChange={setAnnualReturn} suffix="%" />
      <div className="rounded-[1.5rem] border border-[var(--border)] bg-black/30 p-5">
        <p className="text-sm uppercase tracking-[0.28em] text-[var(--gold)]">Estimated Monthly SIP</p>
        <p className="mt-3 text-3xl font-semibold text-white">{formatCurrency(monthlySip)}</p>
        <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
          This is an educational estimate and should not be treated as a return promise.
        </p>
      </div>
    </Card>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  prefix,
  suffix
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <label className="grid gap-3">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-[var(--muted)]">{label}</span>
        <span className="text-sm font-semibold text-white">
          {prefix}
          {new Intl.NumberFormat("en-IN").format(value)}
          {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="accent-[var(--gold)]"
      />
    </label>
  );
}
