import { Header as PrimerHeader, Avatar, StyledOcticon } from "@primer/react";
import { MarkGithubIcon } from '@primer/octicons-react'

function Header() {
  return (
    <>
      <PrimerHeader>
        <PrimerHeader.Item full>
          <PrimerHeader.Link href="https://github.com/mireiasuefra" fontSize={2}>
            <StyledOcticon icon={MarkGithubIcon} size={32} sx={{ mr: 2 }} />
            <span className="header__title">GitHub Searcher</span>
          </PrimerHeader.Link>
        </PrimerHeader.Item>
        <PrimerHeader.Item mr={0}>
          <Avatar
            src="https://avatars.githubusercontent.com/u/78536085?s=40&u=d0d84c2ec1efd7583f6d109302f5695df0872954&v=4"
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
