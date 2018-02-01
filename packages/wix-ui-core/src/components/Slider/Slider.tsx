import * as React from 'react';
import {createHOC} from '../../createHOC';
import * as classNames from 'classnames';

export interface SliderProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (any) => any;
  onInput?: () => any;
  classes?: any;
  scaleMarks?: boolean;
  vertical?: boolean;
  handleSize?: number;
  step?: any;
}

class Slider extends React.PureComponent<SliderProps> {
  static defaultProps = {
    handleSize: 66,
    step: 'any'
  };

  handleChange(ev) {
    this.props.onChange(ev);
  }

  handleInput(ev) {
    this.props.onChange(ev);
  }

  getHandleSize() {
    return this.props.handleSize;
  }

  calcHandleProgressPosition() {
    const handleSize = this.getHandleSize();
    const {value, min, max} = this.props;
    const pct = (value - min) / (max - min);
    return `calc(${pct} * calc(100% - ${handleSize}px))`;
  }

  calcHandleCrossPosition() {
    const handleSize = this.getHandleSize();
    return `calc(50% - ${handleSize / 2}px)`;
  }

  calcHandlePosition() {
    const progressVal = this.calcHandleProgressPosition();
    const crossVal = this.calcHandleCrossPosition();

    if (this.props.vertical) {
      return {bottom: progressVal, left: crossVal};
    }

    return {left: progressVal, top: crossVal};
  }

  renderTicks() {
    if (this.props.step === 'any') {
      return null;
    }

    const step = Number(this.props.step);
    const ticks = [];

    for (let i = this.props.min; i <= this.props.max; i += step) {
      const pct = (i - this.props.min) / (this.props.max - this.props.min);
      const handleSize = this.getHandleSize();
      const left = `calc(${pct} * calc(100% - ${handleSize}px) + ${handleSize / 2}px)`;

      const tick = (
        <div style={{display: 'inline-block', position: 'absolute', left, width: 1, background: '#000', height: 6}}/>
      );
      ticks.push(tick);
    }

    return (
      <div data-hook="ticks-wrapper">
        {ticks}
      </div>
    );
  }

  render() {
    const {classes, vertical, handleSize} = this.props;

    return (
      <div data-hook="wixui-slider" className={classNames(classes.root, {
          [classes.vertical]: vertical
        })}
        style={{width: '100%', height: '100%'}}>
        <input
          className={classes.slider}
          step={this.props.step}
          type="range"
          value={this.props.value}
          min={this.props.min}
          max={this.props.max}
          onChange={this.props.onChange}
          onInput={this.props.onInput}
        />
        <div className={classes.handleWrapper}>
          <div data-hook="sliderThumb"
            className={classes.handle}
            style={{
              ...this.calcHandlePosition(),
              width: handleSize,
              height: handleSize
            }}
          />
          {this.renderTicks()}
        </div>
      </div>
    );
  }
}

export default createHOC(Slider);
