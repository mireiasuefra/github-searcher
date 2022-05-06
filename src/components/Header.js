import { Header as PrimerHeader, Avatar, StyledOcticon } from "@primer/react";
import { MarkGithubIcon } from '@primer/octicons-react'

function Header(props) {
  const avatarUrl = props.user ? props.user.avatarUrl : '';
  const url = props.user ? props.user.url : '';

  return (
    <>
      <PrimerHeader>
        <PrimerHeader.Item full>
          <PrimerHeader.Link href={url} fontSize={2}>
            <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
            <span className="header__title">GitHub Searcher</span>
          </PrimerHeader.Link>
        </PrimerHeader.Item>
        <PrimerHeader.Item mr={0}>
          <Avatar
            src={avatarUrl}
            size={20}
            square
            alt="@octocat"
          />
        </PrimerHeader.Item>
      </PrimerHeader>
    </>
  );
}

export default Header;
