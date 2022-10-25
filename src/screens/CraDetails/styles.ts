import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    height: 200px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    padding-top: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;