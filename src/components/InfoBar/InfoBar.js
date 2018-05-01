import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";
import Avatar from "material-ui/Avatar";
import Link from "gatsby-link";
import { connect } from "react-redux";

import { setNavigatorPosition } from "../../state/store";
import { featureNavigator, moveNavigatorAside } from "./../../utils/shared";

import config from "../../../content/meta/config";
import avatar from "../../images/jpg/logo.jpg";
import TopMenu from "./TopMenu";

const styles = theme => ({
  infoBar: {
    position: "absolute",
    background: theme.bars.colors.background,
    top: 0,
    left: 0,
    width: "100%",
    height: `${theme.bars.sizes.infoBar}px`,
    "&::before": {
      content: `""`,
      position: "absolute",
      left: theme.base.sizes.linesMargin,
      right: theme.base.sizes.linesMargin,
      height: 0,
      bottom: 0,
      borderTop: `1px solid ${theme.base.colors.lines}`
    },
    [`@media (min-width: ${theme.mediaQueryTresholds.L}px)`]: {
      display: "none"
    }
  },
  title: {
    float: "left",
    margin: "10px 0 0 15px",
    color: theme.bars.colors.text,
    "& small": {
      display: "block",
      fontSize: ".65em",
      margin: "2px 0 0 0"
    }
  },
  avatarLink: {
    display: "block",
    float: "left",
    margin: "13px 0 0 30px"
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: 0,
    margin: "-12px 0 0 -24px"
  },
  link: {
    padding: "2rem 2rem 0 0",
    fontTransform: "lowercase",
    color: theme.info.colors.menuLink,
    "&:hover": {
      color: theme.info.colors.menuLinkHover
    }
  }
});

class InfoBar extends React.Component {
  homeLinkOnClick = featureNavigator.bind(this);
  pageLinkOnClick = moveNavigatorAside.bind(this);

  render() {
    const { classes, pages } = this.props;

    return (
      <aside className={classes.infoBar}>
        <Link to="/" className={classes.avatarLink} onClick={this.homeLinkOnClick}>
          <Avatar alt={config.infoTitle} src={avatar} className={classes.avatar} />
        </Link>
        <div style={{float:"right"}}>
        <Link to="/values/" className={classes.link} onClick={this.pageLinkOnClick}>
          Company Values &amp; Vision
        </Link>
        <Link to="/contact/" className={classes.link} onClick={this.pageLinkOnClick}>
          Contact
        </Link>
        </div>
      </aside>
    );
  }
}

InfoBar.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    navigatorPosition: state.navigatorPosition,
    navigatorShape: state.navigatorShape
  };
};

const mapDispatchToProps = {
  setNavigatorPosition
};

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(InfoBar));
