import { redirect } from 'next/navigation';

export default function RootPage() {
  // Redirect to Arabic as default
  redirect('/ar');
}