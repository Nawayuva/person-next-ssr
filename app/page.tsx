import UserCard from '@/app/components/UserCard';
import AlertSection from '@/app/components/AlertSection';
import ArchitectureCard from '@/app/components/ArchitectureCard';
import NavigationCard from '@/app/components/NavigationCard';
import SecurityFeaturesCard from '@/app/components/SecurityFeaturesCard';

export default function HomePage() {
  return (
    <div className="space-y-8 max-w-2xl mx-auto py-8">
            <AlertSection />

      <UserCard />
      <ArchitectureCard />
      <NavigationCard />
      <SecurityFeaturesCard />
    </div>
  );
}

