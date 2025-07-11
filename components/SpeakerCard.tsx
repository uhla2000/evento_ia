import React from 'react';
import { Speaker } from '../types';

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-cyan-500/30 hover:-translate-y-2">
      <img className="w-full h-64 object-cover" src={speaker.imageUrl} alt={`Foto de ${speaker.name}`} />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{speaker.name}</h3>
        <p className="text-md font-semibold text-cyan-400 mt-1">{speaker.title}</p>
        <p className="text-slate-400 mt-4 text-sm">
          {speaker.bio}
        </p>
      </div>
    </div>
  );
};

export default SpeakerCard;
