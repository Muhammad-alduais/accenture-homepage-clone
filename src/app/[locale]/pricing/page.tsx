import PricingForm from '@/components/forms/PricingForm'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function PricingPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
        <div className="pt-20"> {/* Account for fixed header */}
          <PricingForm />
        </div>
      </div>
    </ErrorBoundary>
  )
}