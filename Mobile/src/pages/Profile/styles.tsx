import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 35px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  margin: 24px 0;
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotSlab-Medium';
  text-align: left;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;

  align-self: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;
