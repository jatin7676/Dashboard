import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchCustomerById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

// Force dynamic rendering to prevent build-time data fetching
export const dynamic = 'force-dynamic';

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customers/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} />
    </main>
  );
}

