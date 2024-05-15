import React from 'react';

export default function TeamDetails({
  params: { teamId },
}: {
  params: { teamId: string };
}) {
  return <div>TeamDetails {teamId}</div>;
}
