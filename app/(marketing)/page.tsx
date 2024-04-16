import { CalendarClock } from "lucide-react";
export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex gap-3 items-center bg-amber-100 py-5 px-10 rounded-lg text-amber-700">
        <CalendarClock className="w-10 h-10" />
        <div className="text-4xl font-bold uppercase">
          Outstanding Time Management
        </div>
      </div>
      <h1 className="text-3xl md:text-6xl mt-10 text-slate-800 text-center">
        UltraTask&trade; gives back the time
        <br />
        that other apps waste
      </h1>
    </div>
  );
}
