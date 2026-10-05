import { FC } from "react";
import { profile } from "@/data/siteData";

interface ProfilePhotoFrameProps {
  imageSrc?: string | null;
  className?: string;
  priority?: boolean;
}

export const ProfilePhotoFrame: FC<ProfilePhotoFrameProps> = ({
  imageSrc = profile.profileImageUrl,
  className = "",
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full max-w-[270px] sm:max-w-[300px] rounded-lg overflow-hidden border border-white/10 bg-secondary/40 shadow-xl">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={profile.name}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover object-top filter contrast-[1.02] brightness-[0.99] transition-opacity duration-300"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-secondary/30 text-center">
            <span className="font-mono text-xl font-bold tracking-tight text-foreground/80">MU</span>
            <p className="font-medium text-sm text-foreground mt-2">{profile.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePhotoFrame;
