import NotFoundExperience from '@/components/brand/NotFoundExperience';

export default function NotFound() {
  const basePath = process.env.GITHUB_PAGES === 'true' ? '/truthlab-kids' : '';

  return (
    <NotFoundExperience
      title="This page could not be found"
      description="The evidence trail does not lead to this page. Return to TruthLab Kids and keep investigating."
      goHome="العربية"
      exploreContent="English"
      learningPath="Learning Path"
      truthLab="Truth Lab"
      spreadSimulator="Spread Simulator"
      plainLinks
      basePath={basePath}
    />
  );
}
