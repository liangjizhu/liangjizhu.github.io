import dynamic from 'next/dynamic';

const LocationMapInner = dynamic(() => import('./LocationMapInner'), {
  ssr: false,
  loading: () => (
    <div className="bg-ink-soft animate-pulse" style={{ height: '100%', minHeight: 88 }} />
  ),
});

export default function LocationMap({ compact = false }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-line/60 bg-ink-soft">
      <LocationMapInner compact={compact} />
    </div>
  );
}
