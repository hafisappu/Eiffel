import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Navigation, Phone, CalendarPlus, Check } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { GoldDivider } from './DecorativeDividers';

export const EventDetails = () => {
  const [calendarAdded, setCalendarAdded] = useState(false);

  // Address exactly as specified
  const venueAddress = "Mannankavu, Near Kerafed Junction, Naduvannur";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`;

  // Function to download .ics file or open Google Calendar
  const handleAddToCalendar = () => {
    const title = "Housewarming Ceremony & Reception — Eiffel";
    const details = "Housewarming ceremony and reception of our new home, Eiffel. Hosts: Mr. Muneer T. K. & Mrs. Hisana K. P. (Zahy Muneer Family)";
    const location = venueAddress;
    // 22 Dec 2026 15:00 to 21:00 IST (UTC: 20261222T093000Z to 20261222T153000Z)
    const startDate = "20261222T093000Z";
    const endDate = "20261222T153000Z";

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
    
    window.open(gcalUrl, '_blank', 'noopener,noreferrer');
    setCalendarAdded(true);
    setTimeout(() => setCalendarAdded(false), 3000);
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#FAF7F0] border border-[#DDD0BB] rounded-2xl shadow-luxury p-6 sm:p-10 relative overflow-hidden"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-islamic-pattern opacity-25 pointer-events-none" />

        {/* Section Header */}
        <div className="text-center relative z-10 mb-8">
          <span className="text-[11px] font-cinzel uppercase tracking-[0.3em] text-[#82786C] font-semibold block mb-2">
            Save The Date
          </span>
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl text-[#3E342B] font-semibold tracking-wide uppercase">
            Housewarming Ceremony &amp; Reception
          </h2>
          <div className="w-16 h-[1.5px] bg-[#B49A65] mx-auto mt-3" />
        </div>

        {/* Event Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative z-10 my-8">
          
          {/* Date Card */}
          <div className="flex flex-col items-center text-center p-5 bg-[#F3EBDD]/40 border border-[#DDD0BB]/80 rounded-xl hover:border-[#B49A65]/60 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#FAF7F0] border border-[#B49A65]/40 flex items-center justify-center text-[#B49A65] mb-3 shadow-xs">
              <Calendar className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <span className="text-[11px] font-cinzel uppercase tracking-wider text-[#82786C] font-medium mb-1">
              Date
            </span>
            <p className="font-serif text-lg sm:text-xl font-medium text-[#3E342B]">
              Tuesday
            </p>
            <p className="font-serif text-base sm:text-lg text-[#3E342B]/90">
              22 December 2026
            </p>
          </div>

          {/* Time Card */}
          <div className="flex flex-col items-center text-center p-5 bg-[#F3EBDD]/40 border border-[#DDD0BB]/80 rounded-xl hover:border-[#B49A65]/60 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#FAF7F0] border border-[#B49A65]/40 flex items-center justify-center text-[#B49A65] mb-3 shadow-xs">
              <Clock className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <span className="text-[11px] font-cinzel uppercase tracking-wider text-[#82786C] font-medium mb-1">
              Time
            </span>
            <p className="font-serif text-lg sm:text-xl font-medium text-[#3E342B]">
              3:00 PM onwards
            </p>
            <p className="font-serif text-sm text-[#82786C] italic mt-0.5">
              Reception follows
            </p>
          </div>

          {/* Venue Card */}
          <div className="flex flex-col items-center text-center p-5 bg-[#F3EBDD]/40 border border-[#DDD0BB]/80 rounded-xl hover:border-[#B49A65]/60 transition-colors">
            <div className="w-11 h-11 rounded-full bg-[#FAF7F0] border border-[#B49A65]/40 flex items-center justify-center text-[#B49A65] mb-3 shadow-xs">
              <MapPin className="w-5 h-5" strokeWidth={1.75} />
            </div>
            <span className="text-[11px] font-cinzel uppercase tracking-wider text-[#82786C] font-medium mb-1">
              Venue
            </span>
            <p className="font-serif text-lg sm:text-xl font-medium text-[#3E342B]">
              At Our Residence
            </p>
            <p className="font-sans text-xs text-[#82786C] mt-1 leading-snug">
              Mannankavu, Near Kerafed Junction, Naduvannur
            </p>
          </div>

        </div>

        {/* Dynamic Live Countdown */}
        <div className="relative z-10">
          <CountdownTimer targetDate="2026-12-22T15:00:00+05:30" />
        </div>

        {/* Location & Navigation Actions */}
        <div className="relative z-10 my-8 pt-4 border-t border-[#DDD0BB]/80">
          <div className="text-center mb-5">
            <p className="font-serif text-base text-[#3E342B]">
              Residence Location:
            </p>
            <p className="font-sans font-medium text-sm sm:text-base text-[#3E342B] mt-1">
              {venueAddress}
            </p>
          </div>

          {/* Action Buttons: Get Directions & Add to Calendar */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              id="get-directions-btn"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#B49A65] hover:bg-[#8D7546] text-[#FAF7F0] text-xs uppercase tracking-[0.2em] font-cinzel font-medium rounded-full shadow-sm hover:shadow-soft-gold transition-all duration-300 active:scale-98"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>

            <button
              id="add-to-calendar-btn"
              onClick={handleAddToCalendar}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#FAF7F0] hover:bg-[#F3EBDD] text-[#3E342B] border border-[#DDD0BB] hover:border-[#B49A65] text-xs uppercase tracking-[0.2em] font-cinzel font-medium rounded-full transition-all duration-300 active:scale-98 cursor-pointer"
            >
              {calendarAdded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span className="text-emerald-800">Added to Calendar</span>
                </>
              ) : (
                <>
                  <CalendarPlus className="w-4 h-4 text-[#B49A65]" />
                  <span>Add to Calendar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Information & Call Us Buttons */}
        <div className="relative z-10 pt-6 border-t border-[#DDD0BB]/80 text-center">
          <span className="text-[11px] font-cinzel uppercase tracking-[0.25em] text-[#82786C] font-semibold block mb-4">
            For Inquiries &amp; Assistance
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Primary Phone Button */}
            <a
              id="call-primary-btn"
              href="tel:9037624200"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#FAF7F0] hover:bg-[#F3EBDD] border border-[#DDD0BB] hover:border-[#B49A65] text-[#3E342B] rounded-full text-xs font-sans font-medium transition-all shadow-xs active:scale-98"
            >
              <Phone className="w-3.5 h-3.5 text-[#B49A65]" />
              <span>Call Us: +91 90376 24200</span>
            </a>

            {/* Second Phone Button */}
            <a
              id="call-secondary-btn"
              href="tel:9037443278"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#FAF7F0] hover:bg-[#F3EBDD] border border-[#DDD0BB] hover:border-[#B49A65] text-[#3E342B] rounded-full text-xs font-sans font-medium transition-all shadow-xs active:scale-98"
            >
              <Phone className="w-3.5 h-3.5 text-[#B49A65]" />
              <span>Contact: +91 90374 43278</span>
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  );
};
