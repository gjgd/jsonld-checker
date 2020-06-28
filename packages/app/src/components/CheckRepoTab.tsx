import React from 'react';
// import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import { Alert, AlertTitle } from '@material-ui/lab';
import { getFiles } from 'jsonld-checker';
// import ResultTable from './ResultTable';
import { getQueryParameter, updateQueryParameter } from '../utils';
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
    const repoQueryParameter = getQueryParameter('repo');
    if (repoQueryParameter) {
      return decodeURIComponent(repoQueryParameter);
    }
    return 'https://github.com/transmute-industries/universal-wallet';
  });
  const [files, setFiles] = React.useState<
    Array<{ path: string; url: string }>
  >([]);

  React.useEffect(() => {
    updateQueryParameter('repo', repo);
  }, [repo]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRepo(event.target.value);
  };

  const onClick = async () => {
    const filesInRepo = await getFiles('gjgd', 'jsonld-checker');
    setFiles(filesInRepo);
  };

  return (
    <div className={classes.root}>
      <LoaderButton onClick={onClick} buttonText="Check Repo" />
      <TextField
        label="Enter the URL of a Github repo"
        onChange={onChange}
        defaultValue={repo}
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
      />
      {files.length > 0 ? <FilesTable files={files} /> : <></>}
    </div>
  );
};

export default CheckRepoTab;
