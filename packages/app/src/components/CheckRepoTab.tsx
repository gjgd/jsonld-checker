import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { getFiles } from 'jsonld-checker';
import { getData, updateData, getGithubInfo } from '../utils';
import LoaderButton from './LoaderButton';
import FilesTable from './FilesTable';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  progressBar: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const CheckRepoTab: React.FunctionComponent<{}> = () => {
  const classes = useStyles();

  const [repo, setRepo] = React.useState(() => {
    const repoData = getData('repo');
    return repoData;
  });
  const [files, setFiles] = React.useState<
    Array<{ path: string; url: string }>
  >([]);

  React.useEffect(() => {
    updateData('repo', repo);
  }, [repo]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepo(event.target.value);
  };

  const onClick = async () => {
    const { userName, repoName } = getGithubInfo(repo);
    const filesInRepo = await getFiles(userName, repoName);
    setFiles(filesInRepo);
  };

  return (
    <div className={classes.root}>
      <LoaderButton onClick={onClick} buttonText="List files" />
      <TextField
        label="Enter the URL of a Github repo"
        onChange={onChange}
        defaultValue={repo}
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
      />
      {files.length > 0 ? <FilesTable files={files} repo={repo} /> : <></>}
    </div>
  );
};

export default CheckRepoTab;
