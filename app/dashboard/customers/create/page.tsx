import Form from '@/app/ui/customers/create-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';

// Force dynamic rendering to prevent build-time data fetching
export const dynamic = 'force-dynamic';

export default async function Page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Create Customer',
            href: '/dashboard/customers/create',
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}

