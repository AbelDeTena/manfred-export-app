import { css } from '@emotion/css';
import { theme } from '@/core/theme';

export const container = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 227px;
  height: auto;

  right: -1px;
  padding: 32px;
  gap: 16px;

  top: 50px;
  border-radius: 0px 0px 0px 12px;
  background-color: ${theme.palette.dark[50]};
  @media (min-width: 834px) {
    width: ${theme.spacing(85)};
  }

  @media (min-width: 1024px) {
    width: ${theme.spacing(70)};
  }
`;

export const item = css`
  display: flex;
  width: 100%;
  align-items: center;
  padding: ${theme.spacing(2.5)};
  gap: ${theme.spacing(2.5)};
  font: ${theme.typography.body1};
  text-decoration: none;

  #icon {
    fill: ${theme.palette.dark[900]};
  }

  &:hover {
    color: ${theme.palette.secondary[500]};
    #icon {
      stroke: ${theme.palette.secondary[500]};
      fill: ${theme.palette.secondary[500]};
    }
  }
`;
